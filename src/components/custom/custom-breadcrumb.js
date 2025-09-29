import formatTitle from "@/helper/slug";
import { Breadcrumb } from "@chakra-ui/react";

export default function CustomBreadcrumb({data}){
  return (
    <>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">{formatTitle(data.root)}</Breadcrumb.Link>
          </Breadcrumb.Item>
          {data.first &&   <>
            <Breadcrumb.Separator />
              <Breadcrumb.Item>
              <Breadcrumb.Link href={data.first}>{formatTitle(data.first)}</Breadcrumb.Link>
            </Breadcrumb.Item>
          </>
          }
        </Breadcrumb.List>  
      </Breadcrumb.Root>
    </>
  )
}