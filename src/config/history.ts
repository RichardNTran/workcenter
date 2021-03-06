import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen((location: any, action: any) => window.scrollTo(0, 0));

export default history;
