import React, {useEffect, useState} from 'react/index';
import PropTypes from 'prop-types';

const CancelSubscriptionButton = (props) => {
	const [loaded, setLoaded] = useState(false);
	const apiKey = props.apiKey;

	useEffect(() => {
		if (!loaded && apiKey) {
			const script = document.createElement('script');
			script.id = 'tenstars';
			script.src = `https://tenstars.web.app/bundled-survey-script.js?apiKey=${apiKey}`;
			document.head.appendChild(script);
			script.onload = () => setLoaded(true);
		}
	}, [loaded, apiKey]);

	return (
		<>
			<div id="tenstars-widget"/>
			<button
				disabled={!loaded}
				id="tenstars_cancel_btn"
				value={props.subscriptionId}
			>
				{props.title}
			</button>
		</>
	);
};

CancelSubscriptionButton.propTypes = {
	apiKey: PropTypes.string.require,
	title: PropTypes.string.require,
	subscriptionId: PropTypes.string.require
};

export default CancelSubscriptionButton;
