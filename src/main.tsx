import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'nextstep-payments-gn0lee/dist/style.css';

import { PaymentsProvider } from 'nextstep-payments-gn0lee';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PaymentsProvider>
			<App />
		</PaymentsProvider>
	</React.StrictMode>,
);
