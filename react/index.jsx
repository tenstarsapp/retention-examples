import React from 'react';
import ReactDOM from 'react-dom';
import CancelSubscriptionButton from "./CancelSubscriptionButton";

// Retrieve the subscription id from the user's profile in your app
const SUBSCRIPTION_ID = 'sub_HJYmxWnuDpbb1i';

const App = () =>
	<div>
		<h1>Tenstars Retention Widget React Example</h1>
		<p>Note that 'YOUR_API_KEY_HERE' in the button's src needs to be set to the API key of your site</p>
		<CancelSubscriptionButton apiKey="YOUR_API_KEY_HERE" subscriptionId={SUBSCRIPTION_ID}
		                          title="Cancel My Subscription"/>
	</div>;

ReactDOM.render(<App/>, document.getElementById("root"));

if (module.hot) {
	module.hot.accept();
}
