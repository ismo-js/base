////////////////////////////////////////////////////////////////////////////////
////                                                                        ////
////    Symlink this file to the root of the package you want to pack!      ////
////                                                                        ////
////////////////////////////////////////////////////////////////////////////////

import packer from "./base/subs/packer"

export default async function pack() {
  await packer.default(__dirname)
}
