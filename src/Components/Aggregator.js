import { React } from 'react';

export const Aggregator = (props) => {
    return (
            <div class="favorites">
                <h2>Favorites</h2>
                {props.getFavorites()}
                <h4>Total: $
                    {props.getPrice().toFixed(2)}
                </h4>
            </div>
    );
}