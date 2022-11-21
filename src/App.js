import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <div id="leftSection">
                    <div id="logoHead">
                        <img
                            src="https://theme.zdassets.com/theme_assets/2197739/df1f3a3595ad6f2e809942c0cbfa85f84156dd61.svg"
                            alt="logo"/>
                    </div>
                    <div id="textLogoHeadBlock">
                        <p id="dividerLogoWText">
                            I
                        </p>
                        <a href="https://help.abstract.com/hc/en-us" id="textLogoHead">
                            Help Center
                        </a>
                    </div>
                </div>

                <div id="rightSection">
                    <div id="blockLeftBut">
                        <button id="leftBut">
                            Submit a request
                        </button>
                    </div>
                    <div id="blockRightBut">
                        <button id="rightBut">
                            Sign in
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
