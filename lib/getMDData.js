// Lucas Eras Paiva
// parsing the posts from posts folder and putting returning them sorted by date

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

/**
 * reads md files and returns their content as html. The files
 * must be in the following format: filesDirectory/file/file.md
 * @param {string} folder folder name where files are present
 * @return {object} parsed data of md file (using package gray-matter)
 */
export function getFilesData(folder) {
    const filesDirectory = path.join(process.cwd(), folder)
    const folderNames = fs.readdirSync(filesDirectory)
    const allFilesData = folderNames.map(folderName => {
        const filePath = path.join(filesDirectory, folderName)
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
    return allFilesData
}

export function getAllPostIds(folder) {
    const filesDirectory = path.join(process.cwd(), folder)
    const folderNames = fs.readdirSync(filesDirectory)
    return folderNames.map(folderName => {
        return {
            params: {
                id: folderName
            }
        }
    })
}

export async function getPostData(id, folder) {
    const filesDirectory = path.join(process.cwd(), folder)
    const fullPath = path.join(filesDirectory, id, `${id}.md`)
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


