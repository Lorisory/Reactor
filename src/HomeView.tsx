
function HomeView() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {/* To-Do Items */}
            <section>
                <h2>To-Do Items</h2>
                <ul>
                    <li>Zrefaktorovat navigaci</li>
                    <li>Pochopit jak se implementuje navigace</li>
                    <li>Implementovat základní vzhled financeView</li>
                    <li>Implementovat základní vzhled workView</li>
                    <li>Implementovat základní vzhled notesView</li>
                    <li></li>
                </ul>
            </section>

            {/* Sprint Backlogs */}
            <section style={{ marginTop: '20px' }}>
                <h2>Sprint Backlogs</h2>
                <ul>
                    <li>-</li>
                </ul>
            </section>

            {/* Sprint Schedule */}
            <section style={{ marginTop: '20px' }}>
                <h2>Sprint Schedule 30.9.-6.10.</h2>
                <ul>
                    <li>30.09. pondělí</li>
                    <li>01.10. úterý</li>
                    <li>02.10. středa</li>
                    <li>03.10. čtvrtek</li>
                    <li>04.10. pátek</li>
                    <li>05.10. sobota</li>
                    <li>06.10. neděle</li>
                </ul>
            </section>
        </div>
    );
}

export default HomeView;