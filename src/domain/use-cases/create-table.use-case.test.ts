import { CreateTable } from "./create-table.use-case";


describe('Pruebas en create-table.use-case', () => {
  
    test('should create table with default values', () => {
      
        const createTable = new CreateTable();
        const table = createTable.excecute({base:2});
        const rows = table.split('\n').length;
        
        // expect(createTable).toBeInstanceOf(createTable);
        expect(table).toContain('2 x 1 = 2');
        expect(rows).toBe(10);
    });
    
    test('should create table with custom values', () => {
      
        const options = {
            base: 3,
            limit: 20
        }
        const createTable = new CreateTable();
        const table = createTable.excecute(options);
        const rows = table.split('\n').length;

        expect(table).toContain('3 x 1 = 3');
        expect(table).toContain('3 x 20 = 60');
        expect(rows).toBe(options.limit);
    })
    
})
