import HomeLarge from "../components/HomeLarge";
import ScrollTriggered from "../components/ScrollTriggered"
import { useStateScreenContext } from "../context/ScreenSizeContextProvider"

function Home() {

	const { width } = useStateScreenContext();

	return (
		<>
			{width >= 550 ?
				<HomeLarge />
				:
				<ScrollTriggered />}
		</>

	)
}

export default Home
