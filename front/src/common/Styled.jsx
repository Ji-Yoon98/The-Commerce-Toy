import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 650px;
  margin: 0 auto;
`;

export const Tab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    flex: 1;
    text-decoration: none;
    font-size: 2rem;
    margin-top: 25px;
  }

  button {
    border: none;
    margin-left: right;
    background-color: #fff;
    cursor: pointer;
  }

  div {
    flex: 1;
    text-align: right;
    margin-top: 25px;
  }
`;

export const Title = styled.h2`
  color:#555;
  margin-top: 50px;
  text-align: center;
  flex:2;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const Li = styled.li`
  list-style: none;
  
  button {
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  div {
    display: flex;

    input {
      flex: 3;
      margin-right: 10px;
    }
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: cornflowerblue;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: lightcoral;
    color:#fff;
  }
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.thead`
  background-color: cornflowerblue;
  color: #fff;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
`;

export const TbodyRow = styled.tr`
border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

