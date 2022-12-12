import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
            <Card height='200px' width='200px' variant={CardVariant.outlined}>
                <h2>Title</h2>
                <div>Content Content Content Cont entC o nten tCon tent Con t ent Content</div>
                <button>Buy</button>
            </Card>
        </div>
    );
};

export default App;