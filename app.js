   const parent = React.createElement(
     "div",
     { id: "parent" },
     React.createElement("div", { id: "child" }, [
       React.createElement("h1", {}, "I am an H1 tag"),
       React.createElement("h2", {}, "I am an H2 tag"),
     ]),

     React.createElement("div", { id: "child2" }, [
     React.createElement("h1", {}, "I am an H1 tag"),
     React.createElement("h2", {}, "I am an H2 tag"),
  ] ),
);

  console.log(parent);  // at the end of day this parent is a react element jb tu console me jaage likhega tb pta chlega


   

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);   //converted html is put into DOM
