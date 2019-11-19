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

const Article = Loadable({
	loader: () => import("@/pages/Article"),
	loading: MyLoadingComponent
});

const Tool = Loadable({
	loader: () => import("@/pages/Tool"),
	loading: MyLoadingComponent
});

const MarkdownTool = Loadable({
	loader: () => import("@/pages/Tool/MarkdownTool"),
	loading: MyLoadingComponent
});

const JsonEditorTool = Loadable({
	loader: () => import("@/pages/Tool/JsonEditorTool"),
	loading: MyLoadingComponent
});

export const routes = [
	{ path: "/", component: Home, exact: true },
	{ path: "/component/:name", component: Component },
	{ path: "/article/:name", component: Article },
	{ path: "/tool/index", component: Tool },
	{ path: "/tool/markdown", component: MarkdownTool },
	{ path: "/tool/jsonEditor", component: JsonEditorTool }
];
