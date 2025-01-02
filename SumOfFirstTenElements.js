let sum = () => {
                
                let s = 0;
                let num=10;
                for(let i=1; i<=10; i++)
                {
                    if (!isNaN(num)) { 
                        s += i;
                    }
                }
                return s;
                
            }
            console.log(sum());
