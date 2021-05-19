// Lucas Eras Paiva
// parsing the posts from posts folder and putting returning them sorted by date

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names under /posts
    const folderNames = fs.readdirSync(postsDirectory)
    const allPostsData = folderNames.map(folderName => {
        const filePath = path.join(postsDirectory, folderName)
        const id = folderName

        // Read markdown file as string
        const fullPath = path.join(filePath, id+".md")
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    const folderNames = fs.readdirSync(postsDirectory)
    return folderNames.map(folderName => {
        return {
            params: {
                id: folderName
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, id, `${id}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContent)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}


