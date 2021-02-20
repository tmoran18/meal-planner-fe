import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<TopNav />
			<SideNav />
			<main>{children}</main>
			<style jsx>{`
				main {
					display: flex;
					margin-left: 300px;
					padding-top: 80px;
				}
			`}</style>
		</>
	);
};

export default Layout;
