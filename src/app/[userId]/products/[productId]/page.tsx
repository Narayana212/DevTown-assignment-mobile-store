"use client";
import { getProductById } from "@/app/actions/get-Product-by-id";
import AddToCartButton from "@/components/add-to-cart-button";
import ImageSlider from "@/components/image-slider";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/product-reel";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Check, Loader2, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface PageProps {
  params: {
    userId: string;
    productId: string;
  };
}

interface Product {
  _id: string;
  name: string;
  os: any;
  imageUrl: string;
  price: number;
  description: string;
}

const Page = ({ params }: PageProps) => {
  const { productId } = params;

  const [loading, setLoading] = useState(false);
  if (!productId || !params.userId) {
    notFound();
  }

  const [product, setProducts] = useState<Product>({
    name: "",
    _id: "",
    os: "",
    imageUrl: "",
    price: 0,
    description: "",
  });
  const BREADCRUMBS = [
    { id: 1, name: "Home", href: `/${params.userId}` },
    { id: 2, name: "Products", href: `/${params.userId}/products` },
  ];

  useEffect(() => {
    async function products() {
      setLoading(true);
      const products = await getProductById(productId);
      setProducts(products);
      setLoading(false);
    }
    products();
  }, []);

  const label = product?.os;
  const url = product?.imageUrl as string;

  return loading ? (
    <MaxWidthWrapper className="bg-white">
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product Details */}
        <div className="lg:max-w-lg lg:self-end">
          <ol className="flex items-center space-x-2">
            {BREADCRUMBS.map((breadcrumb, i) => (
              <li key={breadcrumb.href}>
                <div className="flex items-center text-sm">
                  <Link
                    href={breadcrumb.href}
                    className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                  >
                    {breadcrumb.name}
                  </Link>
                  {i !== BREADCRUMBS.length - 1 ? (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <Loader2 className="animate-spin w-6 h-6"/>
            </h1>
          </div>

          <section className="mt-4">
            <div className="flex items-center">
              <p className="font-medium text-gray-900">
              <Loader2 className="animate-spin w-6 h-6"/>
              </p>

              <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
              <Loader2 className="animate-spin w-6 h-6"/>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-muted-foreground">
              <Loader2 className="animate-spin w-6 h-6"/>
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <Check
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-green-500"
              />
              <p className="ml-2 text-sm text-muted-foreground">
                Eligible for instant delivery
              </p>
            </div>
          </section>
        </div>

        {/* Product images */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-square flex items-center justify-center rounded-lg">
            <Loader2 className="animate-spin w-20 h-10"/>
          </div>
        </div>

        {/* add to cart part */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <div>
            <div className="mt-10">
            <Button className="w-full" size={"lg"}><Loader2 className="animate-spin w-6 h-6"/></Button>
            </div>
            <div className="mt-6 text-center">
                <div className="group inline-flex text-sm text-medium">
                  <Shield
                    aria-hidden="true"
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                  />
                  <span className="text-muted-foreground hover:text-gray-700">
                    30 Day Return Guarantee
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </MaxWidthWrapper>
  ) : (
    <MaxWidthWrapper className="bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product Details */}
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMBS.map((breadcrumb, i) => (
                <li key={breadcrumb.href}>
                  <div className="flex items-center text-sm">
                    <Link
                      href={breadcrumb.href}
                      className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>
                    {i !== BREADCRUMBS.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product?.name}
              </h1>
            </div>

            <section className="mt-4">
              <div className="flex items-center">
                <p className="font-medium text-gray-900">
                  {formatPrice(product?.price)}
                </p>

                <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                  {label}
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-muted-foreground">
                  {product?.description}
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <Check
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                />
                <p className="ml-2 text-sm text-muted-foreground">
                  Eligible for instant delivery
                </p>
              </div>
            </section>
          </div>

          {/* Product images */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-square rounded-lg">
              <ImageSlider urls={[`${url}`, `${url}`]} />
            </div>
          </div>

          {/* add to cart part */}
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <div>
              <div className="mt-10">
                <AddToCartButton product={product} />
              </div>
              <div className="mt-6 text-center">
                <div className="group inline-flex text-sm text-medium">
                  <Shield
                    aria-hidden="true"
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                  />
                  <span className="text-muted-foreground hover:text-gray-700">
                    30 Day Return Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductReel
        href="/products"
        query={{ limit: 4, search: "", label, price: 1500, order: -1 }}
        title={`Similar ${label}`}
        subtitle={`Browse similar ${label} phones just like '${product?.name}'`}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
