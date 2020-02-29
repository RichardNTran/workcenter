import { createBrowserHistory as createHistory } from 'history';

const history = createHistory();

history.listen((location: any, action: any) => window.scrollTo(0, 0));

export default history;
