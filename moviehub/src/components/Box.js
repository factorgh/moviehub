const style = {
    width: "30rem",
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "10px",
    marginLeft: "15px",
    backgroundColor:"rgb(80,100,150)"
}

export default function Box({children}) {
    return (
        <div style={style}>{children }</div>
    );
}