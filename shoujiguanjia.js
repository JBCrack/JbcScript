[rewrite_local]
^https?:\/\/api\.apphud\.com\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/replica.js

[mitm]
hostname = api.apphud.com

*************************************/

var ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
var cuttlefish = {"Attention":"恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！","request_date_ms":1662599120248,"request_date":"2022-09-08T01:05:20Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-09-08T01:04:03Z","original_application_version":"8","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{},"entitlements":{},"original_purchase_date":"2022-09-07T13:05:43Z","original_app_user_id":"$RCAnonymousID:ddgksf2013","last_seen":"2022-09-08T01:04:03Z"}};
var ddgksf2013={"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2099-12-18T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"};
var ddgksf2021={"grace_period_expires_date":null,"purchase_date":"2022-09-08T01:04:17Z","product_identifier":"ddgksf2013_1y_128","expires_date":"2099-12-18T01:04:17Z"};
var obj = JSON.parse(JSON.stringify(cuttlefish));
ddgksf2021['product_identifier']="com.ddgksf2013.premium.yearly";
obj['subscriber']['subscriptions']['com.ddgksf2013.premium.yearly']=ddgksf2013;

ua.indexOf('CPUMonitor') != -1
{//手机硬件管家
	obj['subscriber']['entitlements']['Pro']=ddgksf2021;	
}

$done({body: JSON.stringify(obj)});