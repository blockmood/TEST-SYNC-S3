const { types: t } = require('@babel/core');
const fs = require('fs')

module.exports = () => {
  return {
    visitor: {
      FunctionDeclaration(path){
        path.traverse({
          ExpressionStatement(pathNode){
            if(pathNode.type == 'MemberExpression'){
              if(pathNode.property.type === 'Identifier'){
                //说明数组赋值了
                console.log(pathNode.property.name, path.node.id.name)
                fs.writeFile('./error.js', `${pathNode.property.name}, ${path.node.id.name}`, (err) => {})
              }
            }
          }
        })
      }
    },
  };
};

