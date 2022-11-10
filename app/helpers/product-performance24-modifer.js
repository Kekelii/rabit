/* eslint-disable prettier/prettier */
import { helper } from '@ember/component/helper';




/**
 * It takes an array of objects, each object has a subcatlogue property which is an array of objects,
 * each object has a revenue property, the function adds up all the revenue properties and adds a new
 * property to the original object called revenue
 * @param data - The data that you want to calculate the revenue for.
 * @returns the data that was passed in.
 */
let cartlogRevenueCalculation = function(data) {
        data.forEach((item) => {
            let total = 0;
            item.subcatlogue.forEach((subcat) => total += subcat.revenue)
            item.revenue = total;
        })
        return data;
    }
    /**
     * It takes an array of objects, and returns the same array of objects with the addition of two new
     * properties, percentage and catlogue, and the modification of the subcatlogue property
     * @param data - The data to be modified
     */

let modifychain = function(data) {

    let revenue = 0;

    data.forEach((iteam) => {
        revenue += iteam.revenue;
    })
    data.forEach((iteam) => {
        iteam.percentage = (iteam.revenue / revenue) * 100 + '%';
        iteam.catlogue = iteam.catlogue.toUpperCase()
        if (iteam.subcatlogue) {
            iteam.subcatlogue = modifychain(iteam.subcatlogue)
        }
    })

    return data
}

export default helper(function productPerformance24Modifer([data]) {
    let catlogueCalculation = cartlogRevenueCalculation(data)
    return modifychain(catlogueCalculation);

});