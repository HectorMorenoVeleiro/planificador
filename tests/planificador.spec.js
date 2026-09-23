import {expect, test} from '@playwright/test';

test('Muestra el titulo de la app' , async ({page}) => {
    
    await page.goto('/'); // es lo mismo poner '/' que poner 'localhost:5173'
    await expect(page.getByRole('heading', {name: 'Course Planning'})).toBeVisible();

}) // primer test sencillito creado

test('Vamos a añadir una nueva actividad', async({page})=> {
    await page.goto('/')
    await page.getByPlaceholder('Escribe lo que has hecho hoy').fill('Cantar')
    await page.getByPlaceholder('60 min').fill('5')
    await page.getByRole('button', {name: 'Añadir'}).click()
    await expect(
        page.getByText(/Cantar/)
    ).toBeVisible()
})