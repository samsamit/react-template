import { useTheme } from "./baseComponents/theme/theme.context";
import { Badge } from "./baseComponents/ui/badge";
import { Button } from "./baseComponents/ui/button";

function App() {
	const { setTheme } = useTheme();
	return (
		<main className="flex bg-background border border-amber-300 w-full h-full">
			<div className="flex flex-col gap-2">
				<h1>
					React template by <Badge>samsamit</Badge>
				</h1>
				<Button variant={"default"} onClick={() => setTheme("light")}>
					Light
				</Button>
				<Button variant={"default"} onClick={() => setTheme("dark")}>
					Dark
				</Button>
			</div>
		</main>
	);
}

export default App;
