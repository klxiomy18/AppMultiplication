// import { yarg } from "./yargs.plugins"

const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];

    const {yarg} = await import('./yargs.plugins');
    return yarg;
}

describe('Pruebas en yargs.plugins', () => {

  const originalArgv = process.argv;
    beforeEach(()=>{
        process.argv = originalArgv;
        jest.resetModules();
    });
    test('should return default values', async () => {
      
        const argv = await runCommand(['-b','5']);
        
        expect(argv).toEqual(expect.objectContaining({
            base: 5,
            limit: 10,
            showTable: false,
            name: 'multiplication-table',
            destination: 'outputs',
        }))
    });


    test('should return configuration with custom values',async () => {
      
        const argv = await runCommand(['-b','5','-l','11', '-s']);
        // console.log(argv);
        
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 11,
            s: true,
        }))

    })
    
    
})
