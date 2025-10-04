import formatTitle from "@/helper/slug";
import { Breadcrumb } from "@chakra-ui/react";
import Link from "next/link";

export default function CustomBreadcrumb({data}){
  return (
    <>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Link href={`/`}>
              {formatTitle(data.root)}
            </Link>
          </Breadcrumb.Item>
          {data.first &&   <>
            <Breadcrumb.Separator />
              <Breadcrumb.Item>
              <Link href={`/${data.first}`}>
                {formatTitle(data.first)}
              </Link>
            </Breadcrumb.Item>
          </>
          }
          {data.second &&   <>
            <Breadcrumb.Separator />
              <Breadcrumb.Item>
              <Link href={`/${data.first}/${data.second}`}>
                {formatTitle(data.second)}
              </Link>
            </Breadcrumb.Item>
          </>
          }
          {data.third &&   <>
            <Breadcrumb.Separator />
              <Breadcrumb.Item>
              <Link href={`/${data.first}/${data.second}/${data.third}`}>
                {formatTitle(data.third)}
              </Link>
            </Breadcrumb.Item>
          </>
          }
        </Breadcrumb.List>  
      </Breadcrumb.Root>
    </>
  )
}