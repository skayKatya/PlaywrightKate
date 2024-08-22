import {test as base, expect as baseExpect, request as apiRequest} from "@playwright/test";
import ExpensePage from "../pageObjects/expensePage/ExpensePage.js";
import {USER1_STORAGE_STATE_PATH} from "../data/constants.js";

export const test = base.extend({
    context: async ({browser}, use)=>{
        const ctx = await browser.newContext({
            //  get from file
            storageState: USER1_STORAGE_STATE_PATH
        })

        await use(ctx)

        await ctx.close()
    },
    
    request: async ({}, use)=>{
        const ctx = await apiRequest.newContext({
            //  get from file
            storageState: USER1_STORAGE_STATE_PATH
        })

        await use(ctx)

        await ctx.dispose()
    },
    garagePage: async ({page}, use)=>{
        // before test
        const ep = new ExpensePage(page)

        // pass to test
        use(ep)

        // after test
    },
})

export const expect = baseExpect