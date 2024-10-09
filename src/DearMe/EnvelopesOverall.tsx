import Envelope from './Envelope';

function EnvelopeOverall() {
    return (
        <div
            style={{
                border: 'dashed red 3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'top',
                flexWrap: 'wrap', // Umožní zalamování položek
                height: '100vh',
            }}>
            <Envelope text='1 Week' width={400} height={200} />
            <Envelope text='1 Month' width={400} height={200} />
            <Envelope text='1 Year' width={400} height={200} />
        </div>
    );
}

export default EnvelopeOverall;