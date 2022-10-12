import {replaceWithParagraphs, replaceWithImg, replaceWithSentences, replaceWithWords} from "./core";

(async () => {
  // Happy coding!

  await replaceWithImg("#avatar");
  await replaceWithWords("#name", 1);
  await replaceWithParagraphs("#article", 1, 2000);
  await replaceWithSentences("#sentence", 1, 3000);
})();

