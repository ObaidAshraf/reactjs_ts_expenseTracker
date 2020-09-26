import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../components/Header'
import Balance from '../components/Balance'
import App from '../App'

describe("<Header />", () => {
    test("Should show correct header", async() => {
        const { getByText }  = render(<Header />)
        const headerText = getByText("Expense Tracker")
        expect(headerText).toBeInTheDocument()
    })
})

describe("<Balance />", () => {
    test("Should show intial balance as 0", async() => {
        const { getByText } = render(<Balance />)
        const initialBalance = getByText("$0")
        expect(initialBalance).toBeInTheDocument()
    })
})



describe("<AddTransaction />", () => {
    test("Should add a transaction", async() => {
        const { findByTestId } = render(<App />)
        const text = await findByTestId("text")
        const amount = await findByTestId("amount")
        const addBtn = await findByTestId("addBtn")
        const balance = await findByTestId("balance")
        fireEvent.change(text, { target: { value: "test" } })
        expect(text).toHaveValue("test")

        fireEvent.change(amount, { target: { value: 100 } })
        expect(amount).toHaveValue(100)

        fireEvent.click(addBtn)
        expect(balance).toHaveTextContent("$100")

    })

    test("Should add multiple transactions", async() => {
        const { findByTestId } = render(<App />)
        const text = await findByTestId("text")
        const amount = await findByTestId("amount")
        const addBtn = await findByTestId("addBtn")
        const balance = await findByTestId("balance")
        fireEvent.change(text, { target: { value: "test" } })
        expect(text).toHaveValue("test")

        fireEvent.change(amount, { target: { value: 100 } })
        expect(amount).toHaveValue(100)

        fireEvent.click(addBtn)
        fireEvent.click(addBtn)
        expect(balance).toHaveTextContent("$200")

    })

    test("Should remove a transaction", async() => {
        const { findByTestId } = render(<App />)
        const text = await findByTestId("text")
        const amount = await findByTestId("amount")
        const addBtn = await findByTestId("addBtn")
        const balance = await findByTestId("balance")
        fireEvent.change(text, { target: { value: "test" } })
        expect(text).toHaveValue("test")

        fireEvent.change(amount, { target: { value: 100 } })
        expect(amount).toHaveValue(100)

        fireEvent.click(addBtn)
        expect(balance).toHaveTextContent("$100")

        const delBtn = await findByTestId("delBtn")
        fireEvent.click(delBtn)
        expect(balance).toHaveTextContent("$0")

    })

    test("Should remove multiple transactions", async() => {
        const { findByTestId, findAllByTestId } = render(<App />)
        const text = await findByTestId("text")
        const amount = await findByTestId("amount")
        const addBtn = await findByTestId("addBtn")
        const balance = await findByTestId("balance")
        fireEvent.change(text, { target: { value: "test" } })
        expect(text).toHaveValue("test")

        fireEvent.change(amount, { target: { value: 100 } })
        expect(amount).toHaveValue(100)

        fireEvent.click(addBtn)
        fireEvent.click(addBtn)
        expect(balance).toHaveTextContent("$200")

        const delBtn = await findAllByTestId("delBtn")
        fireEvent.click(delBtn[0])
        fireEvent.click(delBtn[0])
        expect(balance).toHaveTextContent("$100")

    })
})