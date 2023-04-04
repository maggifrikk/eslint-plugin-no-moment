module.exports = {
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === "moment") {
            context.report({
              node,
              message: "Do not use 'moment', use an alternative library like 'date-fns' or 'luxon'.",
            });
          }
        },
      };
    },
  };  