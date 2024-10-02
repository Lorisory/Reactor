
function ReactDateStatus() {
    return (
        <div className="App-header"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            }}>
            <div className="App-header"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '50%',
                }}>
                <h4 style={{
                    flex: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Aligns text to the left
                    paddingLeft: '15px', // Adds left padding
                    height: '100%',
                    textAlign: 'left',
                }}>
                    Last update:
                </h4>
                <h4 style={{
                    flex: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Aligns text to the left
                    paddingLeft: '0px', // Adds left padding
                    height: '100%',
                    textAlign: 'left',
                }}>
                    2.10.2024
                </h4>
            </div>

            <div className="App-header"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '50%',
                }}>
                <h4 style={{
                    flex: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Aligns text to the left
                    paddingLeft: '15px', // Adds left padding
                    height: '100%',
                    textAlign: 'left',
                }}>
                    Hours counter:
                </h4>
                <h4 style={{
                    flex: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Aligns text to the left
                    paddingLeft: '0px', // Adds left padding
                    height: '100%',
                    textAlign: 'left',
                }}>
                    4
                </h4>
            </div>
        </div>
    );
}
export default ReactDateStatus;