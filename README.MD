## **tsc --init**
### **Make a config .json file to change the behavior of your ts**
## **tsc -w main.ts**
### **(-w -> whatch)recompile automaticly like nodemon in js**
## **Have a "nodemon.json" file and run (npx nodemon) to make nodemon work on ts**

```yaml
{
       "watch": ["."],
       "ext": "ts",
       "exec": "ts-node main.ts"
}

```
### **if you use tsc without ant thing else will compile the  "files": ["First/conf.ts" , "Another Location"]**
### **in your tsconfig.json file**
## **You can use**
```yaml
"include": ["First/" , "**/*.ts"],
"exclude": ["secureInfo/" , "**/node_modules/"]
```
### **To include specific folder (better way) or to ignore specific folder**
### **Note to put that after the  "compilerOptions": {} brackets**
