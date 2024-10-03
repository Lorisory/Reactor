
function ReactorFooter() {
    return (
        <div className="App-header"
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            }}>
            <h4 style={{
                flex: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end', // Aligns text to the left
                margin: '3pt 15pt',
                width: 'auto',
                textAlign: 'left',
            }}>
                Hours counter: 4 | Last update: 2.10.2024
            </h4>
        </div>
    );
}

export default ReactorFooter;