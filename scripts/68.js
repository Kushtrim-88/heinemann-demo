MasterpassAccess = (new function() {

	// configure masterpass
	var debugged = !!window["MASTERPASS_DEBUG"];
	var walletAlwaysErrors = !!window["MASTERPASS_DEBUG_WALLET_ALWAYS_ERRORS"];
	var lightboxAlwaysErrors = !!window["MASTERPASS_DEBUG_LIGHTBOX_ALWAYS_ERRORS"];
	var currentUrl = window.location.href.replace(/[#?].*$/, ""); // strip query & anchor
	var originUrl = window["MASTERPASS_ORIGIN_URL"];
	if (originUrl) {
		if (debugged) console.log("masterpass origin URL specified as: " + originUrl);
	} else {
		originUrl = currentUrl;
		if (debugged) console.log("masterpass origin URL defaulted to: " + originUrl);
	}
	var walletUrl = window["MASTERPASS_WALLET_URL"];
	if (walletUrl) {
		if (debugged) console.log("masterpass wallet endpoint specified as: " + walletUrl);
	} else {
		walletUrl = "/checkout/mastercard/open_wallet";
		if (debugged) console.log("masterpass wallet endpoint defaulted to: " + walletUrl);
	}
	var callbackUrl = window["MASTERPASS_CALLBACK_URL"];
	if (callbackUrl) {
		if (debugged) console.log("masterpass callback URL is specified as: " + callbackUrl);
	} else {
		callbackUrl = currentUrl;
		if (debugged) console.log("masterpass callback URL defaulted to: " + callbackUrl);
	}
	var enableShippingAddress = !!window["MASTERPASS_ENABLE_SHIPPING_ADDRESS"];
	if (debugged) console.log("masterpass enableShippingAddress=" + enableShippingAddress);

	var invokeMasterpass = function(requestToken, pairingToken, merchantCheckoutId, allowedCardTypes) {
		if (debugged) {
			console.log("invoking masterpass lightbox");
			console.log("requestToken=" + requestToken);
			console.log("pairingToken=" + pairingToken);
			console.log("merchantCheckoutId=" + merchantCheckoutId);
			console.log("allowedCardTypes=" + allowedCardTypes);
		}
		if (!requestToken) {
			console.log("no request token");
			return;
		}
		if (!merchantCheckoutId) {
			console.log("no merchant checkout id");
			return;
		}
		if (!allowedCardTypes) {
			console.log("no allowed card types");
			return;
		}
		if (window.MasterPass === undefined) {
			console.log("no masterpass client library");
			return;
		}
	
		var onSuccess = function(data) {
			if (debugged) console.log("masterpass success");
			if (debugged) console.log(data);
			// forced errors
			if (lightboxAlwaysErrors) {
				if (debugged) console.log("forced masterpass failure");
				onFailure();
				return;
			}
			// locate form
			var form = $("#masterpass_success");
			if (!form) {
				console.log("no masterpass_success form");
				return;
			}
			// insert fields
			form.append('<input name="oauth_token">\
					<input name="oauth_verifier">\
					<input name="checkout_resource_url">\
					<input name="mpstatus">\
					');
			// populate fields
			form.find('input[name="oauth_token"]').val(data.oauth_token);
			form.find('input[name="oauth_verifier"]').val(data.oauth_verifier);
			form.find('input[name="checkout_resource_url"]').val(data.checkout_resource_url);
			form.find('input[name="mpstatus"]').val(data.mpstatus);
			// submit form
			form.submit();
		}
	
		var onCancel = function() {
			if (debugged) console.log("masterpass cancel");
			var form = $('#masterpass_cancel');
			if (!form) {
				// nothing to do, user can return to payment selection
			} else {
				form.submit();
			}
		}
	
		var onFailure = function() {
			console.log("masterpass failure");
			var form = $('#masterpass_failure');
			if (!form) {
				// nothing to do, user can return to payment selection
			} else {
				form.submit();
			}
		}

		var checkout = {
			      "version":"v6",
			      "callbackUrl": callbackUrl,
			      "successCallback": onSuccess,
			      "cancelCallback": onCancel,
			      "failureCallback": onFailure,
			      "requestToken": requestToken,
			      "merchantCheckoutId": merchantCheckoutId,
			      "allowedCardTypes": allowedCardTypes,
			      "suppressShippingAddressEnable": enableShippingAddress ? "false" : "true"
				};
		if (pairingToken) {
			checkout.requestPairing = "true",
			checkout.pairingToken = pairingToken;
			checkout.requestedDataTypes = "[ADDRESS,PROFILE,CARD]";
		}
		MasterPass.client.checkout(checkout);
	};
	
	this.start = function() {
		
		// failed to open wallet
		function walletError(jqxhr, status, error) {
			console.log("failed to open wallet");
			console.log(status);
			console.log(error);
			if (jqxhr.responseJSON) {
				var error = jqxhr.responseJSON.error;
				if (error) handleError(error);
			}
		}
	
		// successfully opened wallet
		// proceed to invoke masterpass
		function walletSucess(data) {
			if (data.error) {
				handleError(data.error);
			} else if (walletAlwaysErrors) {
					var error = { error: "DEBUG_FORCED", detail: "Forced wallet error for debug", redirectUrl: "/walletError" };
					handleError(error);
			} else {
				var wallet = data.wallet;
				invokeMasterpass(wallet.requestToken, wallet.pairingToken, wallet.merchantCheckoutId, wallet.allowedCardTypes);
			}
		}
	
		function handleError(error) {
			console.log(error.error)
			console.log(error.detail)
			if (error.redirectUrl) {
				window.location = error.redirectUrl;
			}
		}
		
		// request to open the wallet via a JSON call
		$.ajax({
			url: walletUrl + "?originUrl=" + originUrl,
			method: 'POST',
			dataType: 'json',
			success: walletSucess,
			error: walletError
		});
	};

	this.init = function() {
		// 'autowire' checkout button
		$('#masterpass_checkout').click(function() { MasterpassAccess.start()});

		if (!debugged) return; // nothing more to do
		console.log("masterpass initializing");
		var button = $('<button>Start Masterpass</button>');
		button.click(function() { Masterpass.start()});
		$('body').append(button);
	}
	
});


$(MasterpassAccess.init())