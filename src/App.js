import './App.css';


function App() {











    return (
        <div className="App">
            <header>
                <div className="leftSection">
                    <div className="logoHead">
                        <img
                            src="https://theme.zdassets.com/theme_assets/2197739/df1f3a3595ad6f2e809942c0cbfa85f84156dd61.svg"
                            alt="logo"/>
                    </div>
                    <div className="dividerLogoWText">
                        I
                    </div>
                    <div className="textLogoHeadBlock">
                        <a href="https://help.abstract.com/hc/en-us" className="textLogoHead">
                            Help Center
                        </a>
                    </div>
                </div>

                <div className="rightSection">
                    <div className="blockLeftBut">
                        <button className="leftBut">
                            Submit a request
                        </button>
                    </div>
                    <div className="blockRightBut">
                        <button className="rightBut">
                            Sign in
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section className="searchingArea">
                    <div className="descSearchText">
                        How can we help?
                    </div>
                    <div className="mainSearchingBar">
                        <input type="text" placeholder="Search"/>
                        <img alt="arrow-right" className="myClass1"/>
                    </div>
                </section>

            </main>

        </div>
    );
}

export default App;
