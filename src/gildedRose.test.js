import { GildedRose, Item } from "./gildedRose";
import product from 'cartesian-product';

test('approve updateQuality', () => {
    function doUpdateQuality(name, sellIn, quality) {
        const items = [new Item(name, sellIn, quality)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();
        return gildedRose.items;    
    }

    const names = ['', 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'];
    const sellIns = [-1, 0, 1, 5, 6, 10, 11];
    const qualities = [0, 1, 49, 50];
    const params = [names, sellIns, qualities];

    const result = runCombinationSnapshot(params, doUpdateQuality);

    expect(result).toMatchSnapshot();
});

function runCombinationSnapshot(params, fn) {
    return product(params).map(combo => [combo, fn(...combo)]);
}

