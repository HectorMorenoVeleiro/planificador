import {expect, test} from '@playwright/test';

test('Muestra el titulo de la app' , async ({page}) => {
    
    await page.goto('/'); // es lo mismo poner '/' que poner 'localhost:5173'
    await expect(page.getByRole('heading', {name: 'Course Planning'})).toBeVisible();

}) // primer test sencillito creado