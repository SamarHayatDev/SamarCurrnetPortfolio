"use client";
import { motion } from "framer-motion";
import React from "react";
import { Product } from "@/types/products";
import Link from "next/link";
import Image from "next/image";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const AnimatedProduct = ({
  product,
  idx,
}: {
  product: Product;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.2, delay: idx * 0.1 }}
    >
      <Link
        href={product.slug ? `/projects/${product.slug}` : product.href}
        key={product.href}
        className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 py-4"
      >
        <div className="h-full flex items-center justify-center">
          <Image
            src={product.thumbnail}
            alt="thumbnail"
            height="200"
            width="300"
            className="rounded-md w-full h-full md:h-[150px] md:w-[300px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <Heading
              as="h4"
              className="font-black text-lg md:text-lg lg:text-lg "
            >
              {product.title}
            </Heading>
            <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl pb-3">
              {/* {product.description} */}
              {product.description.length > 50
                ? `${product.description.slice(0, 150)}...`
                : product.description}
            </Paragraph>
          </div>
          <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
            {product.stack?.map((stack: string) => (
              <span
                key={stack}
                className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
