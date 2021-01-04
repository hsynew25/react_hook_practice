import "./styles.css";
import { useDeviceOrientation } from "./useDeviceOrientation/useDeviceOrientation";
import { useFavicon } from "./useFavicon/useFavicon";
import { useGeolocation } from "./useGeolocation/useGeolocation";
import { useKeyPress } from "./useKeyPress/useKeyPress";
import { useLocalStorage } from "./useLocalStorage/useLocalStorage";
import { useLockScroll } from "./useLockScroll/useLockScroll";
import { useMousePosition } from "./useMousePosition/useMousePosition";
import { useOnline } from "./useOnline/useOnline";

function App() {
  const link = document.querySelector("link[rel~='icon']");
  const newURL = "https://nomadcoders.co/m.png";
  const { alpha, beta, gamma } = useDeviceOrientation();
  const setFavicon = useFavicon(link.href);
  const {
    coords: { lat, lon },
    error,
  } = useGeolocation();
  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const mPressed = useKeyPress("m");
  const cPressed = useKeyPress("c");
  const hPressed = useKeyPress("h");
  const [currentLS, setLS] = useLocalStorage("JWT", null);
  const { x, y } = useMousePosition();
  const isOnline = useOnline();
  const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ol>
        <li>
          <h3>useDeviceOrientation</h3>
          <ul>
            <li>alpah : {alpha ? alpha : "null"}</li>
            <li>beta : {beta ? beta : "null"}</li>
            <li>gamma : {gamma ? gamma : "null"}</li>
          </ul>
        </li>
        <li>
          <h3>useFavicon</h3>
          <ul>
            <li>
              <button onClick={() => setFavicon(newURL)}>Change Favicon</button>
            </li>
          </ul>
        </li>
        <li>
          <h3>useGeolocation</h3>
          <ul>
            <li>Latitude : {lat ? lat : "null"}</li>
            <li>longitude : {lon ? lon : "null"}</li>
            <li>Geolocation Error : {error ? error : "null"}</li>
          </ul>
        </li>
        <li>
          <h3>useKeyPress</h3>
          <ul>
            <li>Pressed 'k' : {kPressed && "K"}</li>
            <li>Pressed 'i' : {iPressed && "I"}</li>
            <li>Pressed 'm' : {mPressed && "M"}</li>
            <li>Pressed 'c' : {cPressed && "C"}</li>
            <li>Pressed 'h' : {hPressed && "H"}</li>
            <li>Pressed 'i' : {iPressed && "I"}</li>
          </ul>
        </li>
        <li>
          <h3>useLocalStorage</h3>
          <ul>
            <li>
              <div>Current Value : {currentLS} </div>
              <button onClick={() => setLS("12345")}>Set Value : 12345</button>
              <button onClick={() => setLS(null)}>Clear LS</button>
            </li>
          </ul>
        </li>
        <li>
          <h3>useMousePosition</h3>
          <ul>
            <li>Mouse X : {x}</li>
            <li>Mouse Y : {y}</li>
          </ul>
        </li>
        <li>
          <h3>useOnline</h3>
          <ul>
            <li>Are we Online ? {isOnline ? "Yes" : "No"}</li>
          </ul>
        </li>
        <li>
          <h3>useLockScroll</h3>
          <ul>
            <li>
              <div>is Locked ? {isLocked ? "Yes" : "No"}</div>
              <button onClick={() => lockScroll()}>lock scroll</button>
              <button onClick={() => unlockScroll()}>unlock scroll</button>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default App;
