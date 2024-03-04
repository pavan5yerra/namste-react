import { render,screen } from "@testing-library/react";
import { ContactUs } from "../components/contantus";
import "@testing-library/jest-dom";


describe("contact us form test cases" , ()=> {

    it('should load contact us component', () => { 
        render(<ContactUs/>)  // its render contact us to JSDOM
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
     })
    
     it('should load  button  inside contanctus component', () => { 
        render(<ContactUs/>)  // its render contact us to JSDOM
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
     })
    
     it('should load  input  inside contanctus component', () => { 
        render(<ContactUs/>)  // its render contact us to JSDOM
        const inputname = screen.getByPlaceholderText("name")
        expect(inputname).toBeInTheDocument();
     })
    
     it('should load  two input  fields inside contanctus component', () => { 
        //rendering
        render(<ContactUs/>)  // its render contact us to JSDOM
        //Querying
        const inputboxes = screen.getAllByRole("textbox") // when you do get all  it will array of objects
        //Assertion
        expect(inputboxes.length).toBe(2);
     })
    
})


