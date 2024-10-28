import PageHeader from '@/components/ui/shared/PageHeader';
import Image from 'next/image';
import React from 'react';
import DogImg from '@/assets/images/blog/blog2.png';

const BlogsPage = () => {
      return (
            <div className="container mb-4">
                  <PageHeader
                        title="FurBabyz Drip Blog – Unleashing Style"
                        subtitle="Stay updated with the latest trends in pet fashion, grooming tips, and exclusive FurBabyz Drip news. Our blog
                              covers everything from seasonal style guides to behind-the-scenes looks at our latest collections."
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-3 my-10">
                        {[...Array(4)].map((item, index) => {
                              return (
                                    <div key={index} className=" mx-auto bg-[#F9F9F9] rounded-xl  ">
                                          {/* Image and Avatar */}
                                          <div className="m-5 rounded-t-xl bg-white h-[370px]">
                                                <div className="w-[261px] h-[369px] mx-auto flex items-center">
                                                      <Image
                                                            className="w-full h-full mx-auto  object-cover"
                                                            src={DogImg.src}
                                                            alt="Dog Avatar"
                                                            width={1000}
                                                            height={1000}
                                                      />
                                                </div>
                                          </div>

                                          {/* Blog Content */}
                                          <div className="px-6 py-4 text-text-secondary">
                                                <h2 className="font-semibold text-title text-xl mb-2">
                                                      Blog 1: “Top 5 Streetwear Trends Your Pet Needs This Year”
                                                </h2>
                                                <p className=" text-base mb-4">
                                                      Let’s be real—your dog can’t be out here looking basic. As the weather gets colder and
                                                      the streetwear scene heats up, your pet deserves to rock the kind of drip that turns
                                                      heads at the dog park. Why should humans have all the fun? Here are the top five
                                                      streetwear trends your pet needs to be flexing this year:
                                                </p>

                                                <ol className="">
                                                      <li>
                                                            <strong className="text-title">1. Hoodies With Attitude</strong>
                                                            <br />
                                                            Hoodies aren’t just for humans anymore. Whether it’s graffiti-inspired designs
                                                            or semifont-semibold logos, nothing says “I’m a streetwear icon” like a hoodie
                                                            that screams swagger.
                                                      </li>
                                                      <li>
                                                            <strong className="text-title">2. Bandanas Are the New Chains</strong>
                                                            <br />
                                                            Sure, dog chains are still cool, but this year, it’s all about bandanas. And not
                                                            just any bandanas—semifont-semibold, oversized, and colorful. If your dog’s not
                                                            accessorizing with a bandana that could double as a cape, are they even in 2024?
                                                      </li>
                                                      <li>
                                                            <strong className="text-title">3. Retro Vibes</strong>
                                                            <br />
                                                            The &apos;90s are back in a big way. Think retro prints, neon colors, and flashy
                                                            throwback wear. Your dog should channel some serious old-school energy to look
                                                            as semifont-semibold as they feel.
                                                      </li>
                                                      <li>
                                                            <strong className="text-title">4. Matching Tracksuits</strong>
                                                            <br />
                                                            Want to match with your pet? Matching tracksuits aren’t just for humans—you can
                                                            hit the streets looking like a duo straight out of a hip-hop video. Fashion
                                                            points if you’re both wearing gold chains.
                                                      </li>
                                                      <li>
                                                            <strong className="text-title">5. Utility Wear</strong>
                                                            <br />
                                                            Function meets fashion with utility vests and cargo-inspired gear for pets. It’s
                                                            perfect for the dog who’s always on a mission.
                                                      </li>
                                                </ol>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
            </div>
      );
};

export default BlogsPage;
