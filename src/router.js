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

const AsyncHome = Loadable({
	loader: () => import("@/pages/Home"),
	loading: MyLoadingComponent
});

const AsyncComponent = Loadable({
	loader: () => import("@/pages/Component"),
	loading: MyLoadingComponent
});

const AsyncWorkflow = Loadable({
	loader: () => import("@/pages/Workflow/Template"),
	loading: MyLoadingComponent
});

export const routes = [
	{ path: "/", component: AsyncComponent, exact: true },
	{ path: "/component", component: AsyncComponent }
];
