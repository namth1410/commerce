import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, searchProduct } from "../../appdata/productsSlice";
import { useAppDispatch, useAppSelector } from "../../appdata/store";
import { PaginationCustom } from "../../components/PaginationCustom";
import ProductCard from "../../components/ProductCard";
import { Skeleton } from "../../components/ui/skeleton";
import { getQueryParam } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

function Search() {
  const dispatch = useAppDispatch();

  const q = getQueryParam("q") || "";

  const { productType = "" } = useParams<{ productType?: string }>();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const products = useAppSelector(
    (state) => state.productsRedux.productsSearch
  );
  const pagination = useAppSelector(
    (state) => state.productsRedux.paginationSearch
  );
  const status = useAppSelector((state) => state.productsRedux.status);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("price:asc");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(getProducts({ productType, page, sortBy }));
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    const searchValue = searchInputRef.current?.value || "";
    dispatch(searchProduct({ name: searchValue, page: 1, sortBy: value }));
  };

  const handleSearch = () => {
    const searchValue = searchInputRef.current?.value || "";
    dispatch(searchProduct({ name: searchValue, page: 1, sortBy: sortBy }));
    window.history.pushState(null, "", `?q=${encodeURIComponent(searchValue)}`);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchInputRef.current?.blur();
    handleSearch();
  };

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.value = q;
    }
    if (q) {
      dispatch(searchProduct({ name: q, page: currentPage, sortBy }));
    }
    // eslint-disable-next-line
  }, [q, dispatch, currentPage, sortBy]);

  return (
    <div className="pt-4 pb-5">
      <div className="max-w-[1000px] m-auto">
        <div className="search-input bg-white rounded-lg py-2 px-4 mb-6 border-none">
          <form onSubmit={handleSubmit}>
            <div className="form-fields py-1 px-1 pt-1">
              <label
                htmlFor="q"
                className="font-normal text-base leading-6 text-left text-[#1D1D1F]"
              >
                Tìm từ khóa:
              </label>
              <input
                className="search-text mt-2 min-h-[48px] bg-white border border-[#EBEBEB] rounded-lg w-full"
                type="text"
                id="q"
                name="q"
                defaultValue=""
                ref={searchInputRef}
              />
            </div>
            <div className="buttons mb-4 mt-5 text-center">
              <button
                type="submit"
                className="button-1 search-button py-2.5 px-7 text-center text-base text-white bg-[#0066CC] rounded-lg min-w-[176px] uppercase"
              >
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>

        {products.length > 0 && (
          <div className="mb-4">
            <Select onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Thứ tự hiển thị" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="price:asc">Giá thấp đến cao</SelectItem>
                  <SelectItem value="price:desc">Giá cao đến thấp</SelectItem>
                  <SelectItem value="name:asc">Tên: A đến Z</SelectItem>
                  <SelectItem value="name:desc">Tên: Z đến A</SelectItem>
                  <SelectItem value="publishedAt:desc">Mới nhất</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="grid grid-cols-4 auto-rows-[minmax(min-content,max-content)] gap-5 mb-4">
          {status === "loading"
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl bg-blue-200" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px] bg-blue-200" />
                      <Skeleton className="h-4 w-[200px] bg-blue-200" />
                    </div>
                  </div>
                ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={
                    product.attributes.images.data?.[0].attributes.url
                      ? `${process.env.REACT_APP_API_URL}${product.attributes.images.data?.[0].attributes.url}`
                      : "/logo512.png"
                  }
                  id={product.id}
                  name={product.attributes.name}
                  currentPrice={product.attributes.price}
                />
              ))}
        </div>

        {products.length > 0 && (
          <div className="flex justify-center mt-4">
            <PaginationCustom
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
