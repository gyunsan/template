import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Breadcrumbs({ pathSegments }: { pathSegments: string[] }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {pathSegments.map((segment, index) => (
                    <React.Fragment key={segment}>
                        {index !== 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                            {index === pathSegments.length - 1 ? (
                                <BreadcrumbPage>{segment}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                                    {segment}
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
