import Loadable from "react-loadable";

const MyLoadingComponent = ({ isLoading, error }) => {
	if (isLoading) {
		// return <div>Loading...</div>;
		return null;
	} else if (error) {
		return <div>Sorry, there was a problem loading the page.</div>;
	} else {
		return null;
	}
};

const Home = Loadable({
	loader: () => import("@/pages/Home"),
	loading: MyLoadingComponent
});

const Component = Loadable({
	loader: () => import("@/pages/Component"),
	loading: MyLoadingComponent
});

const Tool = Loadable({
	loader: () => import("@/pages/Tool"),
	loading: MyLoadingComponent
});

export const routes = [
	{ path: "/", component: Home, exact: true },
	{ path: "/component/:name", component: Component },
	{ path: "/tool", component: Tool }
];
