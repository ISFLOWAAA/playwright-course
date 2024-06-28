import { test, expect} from 'playwright/test';
test('test web table', async ({ page }) => {


await page.goto('https://cosmocode.io/automation-practice-webtable/')

const tableContainer = await page.locator ("xpath=//table[@id='countries']")

const rows = await tableContainer.locator("xpath=.//tr").all()

const countries: Country[] = []


console.log (rows.length)

for(let row of rows ){
    let Country:Country ={

        name: await row.locator('xpath=.//td[2]').innerText(),
        capital: await row.locator('xpath=.//td[3]').innerText(),
        currency: await row.locator('xpath=.//td[4]').innerText(),
        primaryLanguage: await row.locator('xpath=.//td[5]').innerText(),
        amount: 0,
     
    }

    countries.push(Country)
}

  for ( let pepito  of countries ){
       console.log(pepito)
  }


/*for (let row of rows) {
     console.log(await row.innerText())

}*/


const row1= rows.at(1)

const countryName= await row1?.locator ('xpath=.//td[2]').innerText()
const countryCapital= await row1?.locator ('xpath=.//td[3]').innerText()
const countryCurrency= await row1?.locator ('xpath=.//td[4]').innerText()

console.log(countryName,countryCurrency)

interface Country{
  
    capital:string
    currency:string
    primaryLanguage:string
    amount:number
    name: string
}



})
