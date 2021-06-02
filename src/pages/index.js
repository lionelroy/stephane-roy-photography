import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
	return (
		<Layout pageTitle='Home Page'>
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
				alt='High contrast photograph of moroccan architecture..'
				src='../images/casablanca-morocco.jpg'
			/>
		</Layout>
	);
};

export default IndexPage;
