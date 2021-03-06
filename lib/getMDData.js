// Lucas Eras Paiva
// parsing the posts from posts folder and putting returning them sorted by date

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * reads md files and returns their content as html. The files
 * must be in the following format: filesDirectory/file/file.md
 * @param {string} folder folder name where files are present
 * @return {object} parsed data of md file (using package gray-matter)
 */
export function getFilesData(folder) {
    const filesDirectory = path.join(process.cwd(), folder)
    const folderNames = fs.readdirSync(filesDirectory)
    const allFilesData = folderNames.map(fileName => {
        const filePath = path.join(filesDirectory, fileName)
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(filePath)
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
    return folderNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id, folder) {
    const filesDirectory = path.join(process.cwd(), folder)
    const fullPath = path.join(filesDirectory, `${id}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const result = matter(fileContent)
    const content = result.content

    return {
        id,
        content,
        ...result.data
    }
}


